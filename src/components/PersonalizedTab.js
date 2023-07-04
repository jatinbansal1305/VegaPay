import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TablePagination,TableContainer, TableHead, TableRow, Button, Modal, Box, Paper, Typography, TextField, } from '@mui/material';
import InputSearch from './InputSearch';

const salesData = [
  {
    name: 'Adi',
    programName: 'Ebix Cash',
    customerID: '321',
    cardNo: '12341234123412343',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Approved',
    details: <Button variant="contained">View</Button>
  },
  {
    name: 'Rohit',
    programName: 'Ebix Cash',
    customerID: '123',
    cardNo: '12341245123412343',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Rejected',
    details: <Button variant="contained">View</Button>
  },
  {
    name: 'Jatin',
    programName: 'Ebix Cash',
    customerID: '321',
    cardNo: '12341245123412343',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Pending',
    details: <Button variant="contained">View</Button>
  }
  ]
const PersonalizedTab = () =>{
  const [sales, setSales] = useState(salesData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close
  const [selectedAccount,setSelectedAccount]=useState(null);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const slicedSalesData = sales.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const handleSearch = () => {
    const filtered = salesData.filter((sale) =>
     sale.cardNo.includes(searchValue)
  );
    setSales(filtered);
  };

  const handleModalOpen = (sale) => {
    setIsModalOpen(true);
    setSelectedAccount(sale);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
    
      <InputSearch searchValue={searchValue} handleSearch={handleSearch} handleSearchChange={handleSearchChange}/>
     

      <TableContainer style={{backgroundColor :'white'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Program Name</TableCell>
              <TableCell>Customer ID</TableCell>
              <TableCell>Card No.</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Activation Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedSalesData.map(sale => (
              <TableRow key={sale.customerID}>
                <TableCell>{sale.name}</TableCell>
                <TableCell>{sale.programName}</TableCell>
                <TableCell>{sale.customerID}</TableCell>
                <TableCell>{sale.cardNo}</TableCell>
                <TableCell>{sale.expiryDate}</TableCell>
                <TableCell>{sale.activationDate}</TableCell>
                <TableCell>{sale.status}</TableCell>
                <TableCell>
                    <Button variant="contained" onClick={()=>handleModalOpen(sale)}>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={sales.length} 
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
         {isModalOpen && (
       <>
       <div
         style={{
           position: 'fixed',
           top: 0,
           left: 0,
           width: '100%',
           height: '100%',
           backgroundColor: 'rgba(0, 0, 0, 0.5)',
           zIndex: 1,
         }}
       />
     
       <Box
         sx={{
           position: 'fixed',
           top: 0,
           right: 0,
           height: '100vh',
           width: '30%',
           backgroundColor: 'white',
           zIndex: 2,
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'space-between',
         }}
       >
         <div style={{ backgroundColor: '#f3f2f2' }}>
           <Typography variant="h6" component="div" sx={{ p: 2 }}>
             View
           </Typography>
         </div>
     
         <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
           <TextField
             label="Customer ID"
             value={selectedAccount.customerID}
             disabled
             sx={{ marginBottom: '16px' }}
           />
           <TextField
             label="Name on Card"
             value={selectedAccount.name}
             disabled
             sx={{ marginBottom: '16px' }}
           />
           <TextField
             label="Card No"
             value={selectedAccount.cardNo}
             disabled
             sx={{ marginBottom: '16px' }}
           />
           <TextField
             label="Expiry Date"
             value={selectedAccount.expiryDate}
             disabled
             sx={{ marginBottom: '16px' }}
           />
           <TextField
             label="Activation Date"
             value={selectedAccount.activationDate}
             disabled
             sx={{ marginBottom: '16px' }}
           />
         </Box>
     
         <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
           <Button sx={{ m: 1 }} onClick={handleModalClose}>
             Cancel
           </Button>
           <Button variant="contained" sx={{ m: 1 }}>
             Submit
           </Button>
         </div>
       </Box>
     </>
     
      )}

      
    </div>
  );
};

export default PersonalizedTab;
