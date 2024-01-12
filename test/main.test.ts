import axios from "axios"

const request = (url: string, method: string, data: any) => {
    return axios({url, method, data})
}

test.skip('deve receber informação de modalidades de empréstimos disponíveis', async ( ) => {
    const customerDTO = {
        "age": 26,
        "cpf": "275.484.389-23",
        "name": "Vuxaywua Zukiagou",
        "income": 7000.00,
        "location": "SP"
    }

    const {data} = await request('http://localhost:3000/customer-loans', 'post', customerDTO)

    expect(data.customer).toBe("Vuxaywua Zukiagou")
    expect(data.loans).toHaveLength(3)
    expect(data.loans[0].type).toBe("PERSONAL")
    expect(data.loans[0].interest_rate).toBe(4)
})