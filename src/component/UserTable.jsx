import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CustomButton from './CustomButton';

const API_URL = 'https://6a2d4abf2edd4cb330d0fb42.mockapi.io/user';

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); 
  const [editUser, setEditUser] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: true });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setUsers(users.filter(u => u.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditSave = async () => {
    try {
      const response = await fetch(`${API_URL}/${editUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editUser),
      });
      const updatedUser = await response.json();
      setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
      setEditUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newUser, avatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/lego/1.jpg' }),
      });
      const createdUser = await response.json();
      setUsers([...users, createdUser]);
      setIsAdding(false);
      setNewUser({ name: '', email: '', role: '', status: true });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Status mapping: true -> active, false or anything else -> inactive
  const isUserActive = (status) => status === true;

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      (u.name && u.name.toLowerCase().includes(search.toLowerCase())) ||
      (u.email && u.email.toLowerCase().includes(search.toLowerCase()));

    const active = isUserActive(u.status);
    let matchesStatus = true;
    if (filterStatus === 'active') matchesStatus = active;
    if (filterStatus === 'inactive') matchesStatus = !active;

    return matchesSearch && matchesStatus;
  });

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: { xs: 2, md: 4 },
          mb: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ bgcolor: '#B9FF66', px: 2, py: 0.5, borderRadius: '8px', flexShrink: 0 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
            User Management
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: '#555', maxWidth: 350, lineHeight: 1.5, fontSize: '0.9rem' }}>
          Manage your team members and their statuses.
        </Typography>
      </Box>

      {/* Controls */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <TextField
          label="Search Users"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            flex: 1,
            minWidth: 200,
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              '&.Mui-focused fieldset': { borderColor: '#B9FF66', borderWidth: 2 },
            },
          }}
        />
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={filterStatus}
            label="Status"
            onChange={(e) => setFilterStatus(e.target.value)}
            sx={{
              borderRadius: '12px',
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#B9FF66', borderWidth: 2 },
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
        <CustomButton variant="contained" onClick={() => setIsAdding(true)} sx={{ height: 40 }}>
          Add User
        </CustomButton>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: '1px solid #1a1a1a',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '4px 4px 0px #1a1a1a',
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ bgcolor: '#1a1a1a' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 600 }}>User</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 600 }}>Role</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 600 }}>Status</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 600 }} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                  Loading users...
                </TableCell>
              </TableRow>
            ) : filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { bgcolor: '#f9f9f9' } }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={row.avatar} alt={row.name} sx={{ width: 40, height: 40, bgcolor: '#B9FF66', color: '#1a1a1a' }}>
                        {row.name ? row.name.charAt(0) : '?'}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 600, color: '#1a1a1a' }}>{row.name || 'Unnamed'}</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#555' }}>{row.email || 'No email'}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{row.role || 'User'}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: 'inline-block',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        bgcolor: isUserActive(row.status) ? '#B9FF66' : '#eee',
                        color: isUserActive(row.status) ? '#1a1a1a' : '#555',
                      }}
                    >
                      {isUserActive(row.status) ? 'Active' : 'Inactive'}
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" sx={{ color: '#1a1a1a', mr: 1 }} onClick={() => setEditUser(row)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: '#d32f2f' }} onClick={() => handleDelete(row.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Dialog */}
      <Dialog open={!!editUser} onClose={() => setEditUser(null)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Edit User</DialogTitle>
        <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            fullWidth
            value={editUser?.name || ''}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            sx={{ mt: 1 }}
          />
          <TextField
            label="Email"
            fullWidth
            value={editUser?.email || ''}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
          />
          <TextField
            label="Role"
            fullWidth
            value={editUser?.role || ''}
            onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
          />
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={editUser?.status === true ? 'active' : 'inactive'}
              label="Status"
              onChange={(e) => setEditUser({ ...editUser, status: e.target.value === 'active' })}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setEditUser(null)} sx={{ color: '#1a1a1a' }}>
            Cancel
          </Button>
          <CustomButton variant="contained" onClick={handleEditSave} sx={{ minWidth: 100 }}>
            Save
          </CustomButton>
        </DialogActions>
      </Dialog>

      {/* Add Dialog */}
      <Dialog open={isAdding} onClose={() => setIsAdding(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Add New User</DialogTitle>
        <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            fullWidth
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            sx={{ mt: 1 }}
          />
          <TextField
            label="Email"
            fullWidth
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <TextField
            label="Role"
            fullWidth
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={newUser.status ? 'active' : 'inactive'}
              label="Status"
              onChange={(e) => setNewUser({ ...newUser, status: e.target.value === 'active' })}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setIsAdding(false)} sx={{ color: '#1a1a1a' }}>
            Cancel
          </Button>
          <CustomButton variant="contained" onClick={handleAddUser} sx={{ minWidth: 100 }}>
            Add
          </CustomButton>
        </DialogActions>
      </Dialog>

    </Container>
  );
}
