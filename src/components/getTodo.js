import React from "react";
import { Query } from "react-apollo";
import { getIncompleteTodos, addTodo } from "../queries";
import { Table, Button } from 'antd';
import "antd/dist/antd.css";
import "antd/lib/button/style/css";

const addUser = () => (
  // <Mutation mutation={addTodo}>
  // {(insert_profile, { data }) => (
    
  // )}
  // </Mutation>
  alert('Pls enter data!')
);
//   <Query query={getIncompleteTodos}>
//   {({ loading, error, data }) => {
//     console.log(data);
//     if (loading) return <h2>Loading... </h2>;
//     if (error) return `Error! fetching todos.`;
//     if (data.profile.length === 0)
//       return (
//         <div>
//           <h3>No Todos Created Yet</h3>
//         </div>
//       );
//     return (
//       <Table rowSelection={rowSelection} columns={columns} dataSource={gettedData} />
//     );
//   }}
// </Query>
// );

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age'
}];

var gettedData = [];

class GetTodos extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="container">
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <Button
            type="primary"
            onClick={addUser}
            disabled={!hasSelected}
            loading={loading}
          >
            Add user
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Query query={getIncompleteTodos}>
          {({ loading, error, data }) => {
            // console.log("data from posssssssssss");
            console.log(data);
            if (loading) return <h2>Loading... </h2>;
            if (error) return `Error! fetching todos.`;
            if (data.profile.length === 0)
              return (
                <div>
                  <h3>No Todos Created Yet</h3>
                </div>
              );
            return (
              <Table rowSelection={rowSelection} columns={columns} dataSource={data.profile} />
            );
          }}
        </Query>
      </div>
    );
  }
}

export default GetTodos;