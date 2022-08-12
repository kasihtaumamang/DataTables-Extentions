$('#ID').DataTable({
        destroy: true,
        responsive: true,
        ordering: false,
        processing: true,
        serverSide: true,
        pageLength: 5,
        searching: true,
        lengthMenu: [[5, 10, 25, 50, 100], [5, 10, 25, 50, 100]],
        order: [],
        ajax: {
            url: "<?= site_url('') ?>",
            method: "POST"
        },
        buttons: ['copy', 'excel', 'pdf', 'csv', 'print', 'colvis'],
        columnDefs: [
            {
                targets: [0],
                orderable: false,
            }, 
        ],
        language: {
            processing: '<i class="fas fa-spinner fa-spin fa-lg"></i> Sedang diproses',
            sSearch: 'Pencarian :',
            searchPlaceholder: 'Cari Sesuatu...',
            paginate: {
                previous: 'Sebelumnya',
                next: 'Selanjutnya',
            },
            zeroRecords: "Tidak ditemukan data yang sesuai",                    
            emptyTable: "Tidak ada data yang tersedia pada tabel ini.",
            info: "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
            infoEmpty: "Menampilkan 0 sampai 0 dari 0 data",
            infoFiltered: "(disaring dari _MAX_ data keseluruhan)",
            lengthMenu: "Tampilkan _MENU_ data",
        },
        rowCallback: (row, data) => {
            //select the column and set the css
            $('td:eq(0)', row).css('vertical-align', 'middle').css('text-align', 'center');
            $('td:eq(1)', row).css('vertical-align', 'middle');
            $('td:eq(2)', row).css('vertical-align', 'middle').css('text-align', 'center');
            $('td:eq(3)', row).css('vertical-align', 'middle').css('text-align', 'center');
            $('td:eq(4)', row).css('vertical-align', 'middle').css('text-align', 'center');
            $('td:eq(5)', row).css('vertical-align', 'middle').css('text-align', 'center');
            $('td:eq(6)', row).css('vertical-align', 'middle').css('text-align', 'center');
        },
    });
