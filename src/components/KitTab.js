import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TablePagination,TableContainer, TableHead, TableRow, Button, Modal, Box, Paper, Typography, Select, MenuItem, TextField, } from '@mui/material';

import InputSearch from './InputSearch';


const KitTab = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');
  const [branchId, setBranchId] = useState('4ff819ab-00ea-45b8-9544-205407c0680c');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [bearerToken, setBearerToken] = useState('eyJraWQiOiJnWlwvclBnV1RLVjBWbUFpWW52WVwvbUNaZUdxNXpHVVJDUWlpU0FUaHZyVjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkiLCJldmVudF9pZCI6IjgyNGVmMzBiLWE3MjQtNDFiNi1hZjI5LWEyYzAzNGNlODE5NSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODgzODM1NDcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfQlFqQWVQbWVkIiwiZXhwIjoxNjg4NDY5OTQ3LCJpYXQiOjE2ODgzODM1NDcsImp0aSI6ImE3YWY1YzNiLTRhNDItNDQyYS1iZWU1LTJjOThmZjRlYTRjOSIsImNsaWVudF9pZCI6IjdqOWJyOTIxYWZmMGNzcHNlNnBqaGMydnA3IiwidXNlcm5hbWUiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkifQ.NPWeq3Xw_QYWL9g6ZcPEmUwHdgO5Ly8twMUXbGOPweTXEuX0ykZTHF6PZ4Y1PukbRDjcHkz66IMW4Gx36lOrPfeM48JtInsNttA4Cpd9l48pzRjyeiVGzBhXi2c_XU-cjIkyFY2DFszWi7dN1Qxaq2_1yLWl8we3PR8XgWpwAeeFKPFAKhjpgRwVhUAlE0t3ypmHtOeEcMbN1zMVRi3DS64WPFjzrwQhHHFYqw7Igy2xLT14r26yQ3cEzn1ZY_880dpw9voYtn0sNvYEUksgBmXlNx3Y8J4KL-UuceWv9QgezqOUbAyHq9cO4R5UU5QpIubUK6F2bgc5P9NqCiyoDA');
  const [isModalOpenCreate, setIsModalOpenCreate] = useState(false); // State for modal open/close
  const [isModalOpenView, setIsModalOpenView] = useState(false); // State for modal open/close

  const [programType, setProgramType] = useState('');
  const [corporateName, setCorporateName] = useState('');

  const handleProgramTypeChange = (event) => {
    setProgramType(event.target.value);
  };

  const handleCorporateNameChange = (event) => {
    setCorporateName(event.target.value);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    // Fetch users data from the API
       const searchData = {
      value: searchValue,
      branchId,
      page: 0,
      pageSize: 50
    };

    // Perform the search API call
    fetch('https://prod-api.vegapay.tech/forex/account/search', {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(searchData)
    })
      .then(response => response.json())
      .then(data => {
        // Process the search results
        setUsers(data.records);
        console.log(data);
      })
      .catch(error => console.error(error));
  };
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
  const slicedUserData = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const handleSearch = () => {
    const searchData = {
      value: searchValue,
      branchId,
      page: 0,
      pageSize: 50
    };

    // Perform the search API call
    fetch('https://prod-api.vegapay.tech/forex/account/search', {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(searchData)
    })
      .then(response => response.json())
      .then(data => {
        // Process the search results
        setUsers(data.records);
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  const handleModalOpenView = (user) => {
    setIsModalOpenView(true);
    setSelectedAccount(user)
  };
  const handleModalOpenCreate = () => {
    setIsModalOpenCreate(true);
  };

  const handleModalClose = () => {
    setIsModalOpenCreate(false);
    setIsModalOpenView(false);
  };
  return (
    <div>
    
      <InputSearch searchValue={searchValue} handleSearch={handleSearch} handleSearchChange={handleSearchChange}/>
     

      <TableContainer style={{backgroundColor :'white'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>cardNo</TableCell>
              <TableCell>Email Id</TableCell>
              <TableCell>Mobile No.</TableCell>
              <TableCell>Card Network</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedUserData.map(user => (
              <TableRow key={user.userId}>
                <TableCell>{user.customer.fullName}</TableCell>
                <TableCell>{user.card?user.card.cardNumber:'-'}</TableCell>
                <TableCell>{user.customer.emailId}</TableCell>
                <TableCell>{user.customer.mobileNumber}</TableCell>
                <TableCell>{user.card?user.card.cardNetwork:'-'}</TableCell>
                <TableCell>
                  {user.account ? (
                    <Button variant="contained" onClick={()=>handleModalOpenView(user)}>View Account</Button>
                  ) : (
                    <Button variant="contained" onClick={handleModalOpenCreate}>Create Account</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={users.length} 
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
         {isModalOpenCreate && (
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
                 Create Account
               </Typography>
             </div>
     
             <div style={{ padding: '16px' }}>
               <Typography variant="subtitle1">Program Type</Typography>
               <Select
                 value={programType}
                 onChange={handleProgramTypeChange}
                 sx={{ width: '100%', marginBottom: '16px' }}
               >
                 <MenuItem value="corporate">Corporate</MenuItem>
                 <MenuItem value="individual">Individual</MenuItem>
               </Select>
     
               {programType === 'corporate' && (
                 <TextField
                   label="Corporate Name"
                   value={corporateName}
                   onChange={handleCorporateNameChange}
                   sx={{ width: '100%', marginBottom: '16px' }}
                 />
               )}
             </div>
     
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
       {isModalOpenView && (
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
    
            <div style={{ padding: '16px' }}>
              <div>
                <TextField
                  label="Account ID"
                  value={selectedAccount.accountID}
                  disabled
                 
                />
                <TextField label="Kit ID" value={selectedAccount.kitID} disabled />
              </div>
    
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '16px' }}>
                <TextField
                  label="Card No"
                  value={selectedAccount.cardNo}
                  disabled
                  sx={{ marginRight: '16px' }}
                />
                <TextField label="Expiry Date" value={selectedAccount.expiryDate} disabled />
              </div>
            </div>
    
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

export default KitTab;
