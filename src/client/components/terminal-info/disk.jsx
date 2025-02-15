/**
 * disk info
 */

import { Table } from 'antd'
import { isEmpty } from 'lodash-es'
import colsParser from './data-cols-parser'

export default function TerminalInfoDisk (props) {
  const { disks, isRemote, terminalInfos } = props
  if (isEmpty(disks) || !isRemote || !terminalInfos.includes('disks')) {
    return null
  }
  const col = colsParser(disks[0])
  const ps = {
    rowKey: (rec) => `${rec.mount}_${rec.filesystem}`,
    dataSource: disks,
    bordered: true,
    columns: col,
    size: 'small',
    pagination: false
  }
  return (
    <div className='terminal-info-section terminal-info-disk'>
      <div className='pd1y bold'>File system</div>
      <Table {...ps} />
    </div>
  )
}
