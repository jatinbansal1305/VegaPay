import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TablePagination,TableContainer, TableHead, TableRow, Button, Modal, Box, Paper, Typography, TextField, } from '@mui/material';
import InputSearch from './InputSearch';

const reIssueData = [
  {
    kitNo: '1212121',
    name: 'rohit',
    programName: 'Ebix Cash',
    customerID: '321',
    cardNo: '12341234123412343',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Approved',
    details: <Button variant="contained">View</Button>
  },
  {
    kitNo: '12312312',
    name: 'Jatin',
    programName: 'Ebix Cash',
    customerID: '123',
    cardNo: '12341245123412000',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Rejected',
    details: <Button variant="contained">View</Button>
  },
  {
    kitNo: '2423452',
    name: 'Adi',
    programName: 'Ebix Cash',
    customerID: '123',
    cardNo: '12341245123412001',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Pending',
    details: <Button variant="contained">View</Button>
  }
]
const ReissueTab = () =>{
  const [reIssue, setReIssue] = useState(reIssueData);
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
  const slicedReIssueData = reIssue.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const handleSearch = () => {
    const filtered = reIssueData.filter((reIssue) =>
     reIssue.cardNo.includes(searchValue)
  );
    setReIssue(filtered);
  };

  const handleModalOpen = (reIssue) => {
    setSelectedAccount(reIssue);
    setIsModalOpen(true);
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
              <TableCell>Kit No.</TableCell>
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
            {slicedReIssueData.map(reIssue => (
              <TableRow key={reIssue.customerID}>
                <TableCell>{reIssue.kitNo}</TableCell>
                <TableCell>{reIssue.name}</TableCell>
                <TableCell>{reIssue.programName}</TableCell>
                <TableCell>{reIssue.customerID}</TableCell>
                <TableCell>{reIssue.cardNo}</TableCell>
                <TableCell>{reIssue.expiryDate}</TableCell>
                <TableCell>{reIssue.activationDate}</TableCell>
                <TableCell sx={{ color: 'green', fontWeight: 'bold' }}>{reIssue.status}</TableCell>
                <TableCell>
                    <Button variant="contained" onClick={()=>handleModalOpen(reIssue)}>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={reIssue.length} 
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
             Wallet Details
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

export default ReissueTab;
