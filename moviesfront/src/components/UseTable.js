import { Sort } from '@mui/icons-material';
import { Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material'
import React, { useState } from 'react'



export default function UseTable(records, headCells, filterFn) {

    const pages=[5,10]
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[0])
    const [order, setOrder] = useState()
    const [orderBy,setOrderBy] = useState()

    const TblContainer = props => (
        <Table>
            {props.children}
        </Table>
    )

    const TblHead = props => {

        const handleSortRequest = cellId => {
            const isAsc = orderBy === cellId && order === "asc";
            setOrder(isAsc ? 'desc' : 'asc')
            setOrderBy(cellId)
        }

        return (<TableHead>
            <TableRow>
                {
                    headCells.map(headCell =>(
                    <TableCell key={headCell.id}
                    sortDirection={orderBy === headCell.id ? order:false}>
                        <TableSortLabel
                        active={orderBy === headCell.id}
                        direction = {orderBy === headCell.id?order:'asc'}
                        onClick = {()=>{handleSortRequest(headCell.id)}}>
                        {headCell.label}
                        </TableSortLabel>
                    </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }
    const TblPagination = () => (<TablePagination
    component="div"
    page = {page}
    rowsPerPageOptions={pages}
    rowsPerPage={rowsPerPage}
    count={records.length}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    />)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingCompartor(a,b, orderBy)
            : (a, b) => -descendingCompartor(a, b, orderBy);
    }

    function descendingCompartor(a,b,orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records),getComparator(order, orderBy))
        .slice(page*rowsPerPage, (page+1)*rowsPerPage)
    }
    

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value,10))
        setPage(0)
    }


    return {TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting}
}
