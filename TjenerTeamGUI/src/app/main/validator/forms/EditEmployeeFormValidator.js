export const EditEmployeeFormValidator =
    [
        {
            field: 'address',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler addresse'
        },
        {
            field: 'zipCode',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler post nr.'
        },
        {
            field: 'phoneNumber',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler telefon nr.'
        },
        //Cpr + Kontonr.
    ];

