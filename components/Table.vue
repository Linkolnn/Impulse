<template>
  <div class="departments-table">
    <table class="departments-table__inner">
      <tbody>
        <template v-for="(row, rowIndex) in processedRows" :key="rowIndex">
          <tr class="departments-table__row" :class="rowClasses(row)">
            <template v-for="(cell, cellIndex) in row.cells" :key="cellIndex">
              <td
                class="departments-table__cell"
                :class="cellClasses(cell)"
                :rowspan="cell.rowspan"
                :colspan="cell.colspan"
              >
                <template v-if="hasHtml(cell.content)">
                  <span class="cell-content" v-html="cell.content"></span>
                </template>
                <template v-else>
                  {{ cell.content }}
                </template>
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  rows: {
    type: Array,
    required: true,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => [
      { name: 'name', width: '70%', align: 'left' },
      { name: 'places', width: '30%', align: 'right' }
    ]
  },
  cellClasses: {
    type: Function,
    default: (cell) => ({
      'departments-table__cell--name': cell.column === 'name',
      'departments-table__cell--places': cell.column === 'places',
      'departments-table__cell--subsection': cell.type === 'subsection',
      'departments-table__cell--department': cell.type === 'department'
    })
  },
  rowClasses: {
    type: Function,
    default: (row) => ({
      'departments-table__row--subsection': row.type === 'subsection',
      'departments-table__row--department': row.type === 'department'
    })
  }
})

const hasHtml = (content) => {
  return typeof content === 'string' && (content.includes('<br>') || content.includes('</'))
}

// Обрабатываем строки для вычисления rowspan/colspan
const processedRows = computed(() => {
  const processed = []
  const rowSpans = {}

  // Инициализируем rowSpans для всех колонок
  props.columns.forEach(col => {
    rowSpans[col.name] = { count: 0, content: null, rowIndex: -1 }
  })

  props.rows.forEach((row, rowIndex) => {
    const processedRow = { ...row, cells: [] }

    props.columns.forEach((col, colIndex) => {
      const cellKey = col.name
      const cellValue = row[cellKey]
      const cellType = row.type || 'normal'
      
      // Если есть rowspan для этой колонки
      if (rowSpans[cellKey].count > 0) {
        rowSpans[cellKey].count--
        return // Пропускаем создание ячейки, так как она уже объединена
      }

      const cell = {
        column: cellKey,
        content: cellValue,
        type: cellType,
        rowspan: 1,
        colspan: 1
      }

      // Проверяем нужно ли объединять ячейки вертикально
      if (typeof cellValue === 'object' && cellValue.rowspan) {
        cell.rowspan = cellValue.rowspan
        cell.content = cellValue.content
        rowSpans[cellKey] = { count: cellValue.rowspan - 1, content: cellValue.content, rowIndex }
      }

      // Проверяем нужно ли объединять ячейки горизонтально
      if (typeof cellValue === 'object' && cellValue.colspan) {
        cell.colspan = cellValue.colspan
      }

      processedRow.cells.push(cell)
    })

    processed.push(processedRow)
  })

  return processed
})
</script>

<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.departments-table 
  width: 100%
  margin-top: 24px
  border-collapse: collapse

.departments-table__inner 
  width: 100%
  border-collapse: collapse

.departments-table__cell 
  padding: 16px 
  vertical-align: top
  border: 4px solid $red

.departments-table__cell--name 
  width: 80%

.departments-table__cell--places 
  text-align: center
  border-left: 4px solid $red

.cell-content
  line-height: 3

.departments-table__row--subsection .departments-table__cell--name 
  padding-left: 24px
  font-weight: 400

.departments-table__row--department .departments-table__cell--name 
  font-weight: 600

@include mobile 
  .departments-table
      overflow-x: scroll 
</style>