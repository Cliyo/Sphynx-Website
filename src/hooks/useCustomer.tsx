import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { app } from "services/axios";

import { CustomerItemDTO, CustomerTableDataDTO } from "dtos/CustomerDTO";
import { CreateCustomerFormData } from "pages/CustomersCreate/types";

export const useCustomer = () => {

    const navigate = useNavigate()

    const [ customerTableData, setCustomerTableData ] = useState<CustomerTableDataDTO[]>([]);

    const fetchCreateCustomer = async (data: CreateCustomerFormData) => {
        await app.post('/consumers', data)

        navigate('/customers')
    }

    const fetchGetAllCustomers = useCallback(async () => {
        const request = await app.get('/consumers') 
        const data = request.data as CustomerItemDTO[]

        const dataFormatted = data.map((customer) => {
            return {
                name: customer.name,
                ra: customer.ra,
                tag: customer.tag,
                group: customer.group.name,
            } as CustomerTableDataDTO
        })

        setCustomerTableData(dataFormatted);
    }, [])

    return {
        fetchGetAllCustomers,
        fetchCreateCustomer,
        customerTableData
    }
}