import './userlist.css';
import { DataGrid } from '@material-ui/data-grid';

export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'User name',
          width: 200,
          editable: true,
        },
        {
          field: 'gmail',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
          editable: true,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160
        },
      ];
      
      const rows = [
        { id: 1, username: 'Apaar', avatar: '/assets/apaar.jpg', gmail: 'apaar@gmail.com', status: 'active', transaction: '$500'},
        { id: 2, username: 'Apaar', avatar: '/assets/apaar.jpg', gmail: 'apaar@gmail.com', status: 'active', transaction: '$500'},
        { id: 3, username: 'Apaar', avatar: '/assets/apaar.jpg', gmail: 'apaar@gmail.com', status: 'active', transaction: '$500'},
        { id: 4, username: 'Apaar', avatar: '/assets/apaar.jpg', gmail: 'apaar@gmail.com', status: 'active', transaction: '$500'},
        { id: 5, username: 'Apaar', avatar: '/assets/apaar.jpg', gmail: 'apaar@gmail.com', status: 'active', transaction: '$500'},
      ];
    return (
        <div className = "userList">
                <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        disableSelectionOnClick
                    />
        </div>
    )
}
