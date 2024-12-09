import customers from './customer.js';  // 顧客データをインポート

$(document).ready(function() {
    // 顧客情報テーブルにデータを挿入
    createCustomerTable(customers);

    // 顧客情報テーブルを作成する関数
    function createCustomerTable(users) {
        const customerTableBody = document.getElementById('customer-table-body');
        customerTableBody.innerHTML = ''; // テーブルをクリア

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="customer_id"id="${user.id}">${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.phone_number}</td>
            `;
            customerTableBody.appendChild(row);
        });
    }

    // 顧客IDをクリックした時に詳細を表示する
    $('#customer-table-body').on('click', '.customer_id', function() {
        // ユーザーIDの取得
        const userId = $(this).attr('id');
        const user   = customers.find(c => c.id === Number(userId));

        // 顧客詳細を表示
        if (user) {
            document.getElementById('user-name').textContent = user.name;
            document.getElementById('user-age').textContent = user.age;
            document.getElementById('user-address').textContent = user.address;
            document.getElementById('user-phone').textContent = user.phone_number;
            document.getElementById('user-rank').textContent = user.rank;
        } else {
            alert('指定したIDの顧客が見つかりません');
        }
    });

    // // 検索機能
    // $('#search-input').on('input', function() {
    //     const searchTerm = $(this).val().toLowerCase();  // 小文字に変換して検索
    //     const filteredCustomers = customers.filter(customer => {
    //         return customer.address.toLowerCase().includes(searchTerm); // 名前にキーワードが含まれているかチェック
    //     });

    //     createCustomerTable(filteredCustomers); // フィルタリングされた顧客データをテーブルに表示
    // });
});
