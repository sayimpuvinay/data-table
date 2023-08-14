import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css';
import DataTable from 'react-data-table-component';


function Table() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        'Content-Type': 'application/json',
      };

      const columns = data ? data.column_names.map((columnName) => ({
    name: columnName,
    selector: columnName,
    sortable: true,
  })) : [];

  const tableData = data ? data.data : [];

      const body = {
        token: {
          session_id: '84ea4a6f-af71-4924-bad2-99065cdac45f',
          user_id: 31696,
          user_name: 'athummal@cswg.com',
          user_name_id: 'athummal',
          name: 'Anudeep Thummalapalli',
        },
        key_word: 'sales',
        filter_string: '',
        dataviz_level: 'level_1',
        yml_type: 'data_viz',
        appl_name: 'default appl',
      };

      try {
        const response = await axios.post(
          'https://devcsapim.cswg.com/dplui/1.0/data_viz',
          body,
          { headers }
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = data
    ? data.data.filter((item) =>
        Object.values(item).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
      )
    : [];

  const renderTable = () => {
    if (!data) {
      return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">Loading...</div>
    </div>
    );
    }

    const columns = data ? data.column_names.map((columnName) => ({
    name: columnName,
    selector: columnName,
    sortable: true,
  })) : [];

  const tableData = data ? data.data : [];

    return (
      <div>
        {error && <div className="error text-center">Error: {error.message}</div>}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <DataTable
          title=""
          columns={columns}
          data={filteredData}
          noDataComponent="No Data Available"
          progressPending={!data}
          progressComponent={
            <div className="d-flex align-items-center justify-content-center vh-100">
              Loading...
            </div>
          }
          pagination
          sortable
        />
      </div>
    );
  };

  return (
    <div className="d-flex align-items-center justify-content-center m-auto">
      {error && <div className="error text-center">Error: {error.message}</div>}
      {renderTable()}
    </div>
  );
}

export default Table;