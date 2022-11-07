import React, { useState } from 'react';

const CreateAcc = (props) => {
    const createRandomAccount = () => {
        return Math.floor(10000000 + Math.random() * 90000000);
    }

    const [initialAccountNumber, setInitialAccountNumber] = useState(createRandomAccount());
    const [initialBalance, setInitialBalance] = useState(0);
    const clients = JSON.parse(localStorage.getItem('users'));
    



    const createNewAccount = (user) => {
        const localUsers = clients;
        //props.users

        let alreadyExists = false;
        localUsers.forEach(row => {
            if(row.email === user.email) {
                alreadyExists = true;
            }
        });

        if(alreadyExists) {
            alert('Email already exists')
            return false;
        }
        else {
            localUsers.unshift(user);
            //props.setUsers(localUsers); 
            localStorage.setItem('users', JSON.stringify(localUsers));
            alert('Successfully created')
            return true;
        }
    }


    const handleCreateAccount = (event) => {
        event.preventDefault();
        const user = event.target.elements;

        const account = {
            email: user.email.value,
            password: user.password.value,
            fullname: user.fullname.value,
            type: user.accountType.value,
            number: user.accountNumber.value,
            isAdmin: false,
            balance: user.initialBalance.value, 
            transactions: []
        }

        const isSaved = createNewAccount(account);
        if(isSaved) {
            user.email.value = '';
            user.password.value = '';
            user.fullname.value = ''; 
            user.accountNumber.value = setInitialAccountNumber(createRandomAccount());
            user.initialBalance.value = setInitialBalance(0);
        }
    }
    
    return (
            <form id="form" onSubmit={handleCreateAccount}>
                <h1>Create Account</h1>
                
                <label>Full name</label>
                <input id="fullname" type="text" name="fullname" />
                <hr />
                <label htmlFor="account-number">Account</label>
                <input id="account-number" name="accountNumber"  type="number" value={initialAccountNumber} disable='true' />

                <label >Initial balance</label>
                <input id="balance" type="text"  name="initialBalance" />

                <label htmlFor="account-type">Account Type</label>
                <select name="accountType">
                    <option value="Checking Account">Checking Account</option>
                    <option value="Savings Accounts">Savings Account</option>
                    <option value="Salary Accounts">Salary Account</option>
                </select>
                <hr />
                <label >Email Address</label>
                <input id="email" type="email" name="email" />
                <label >Password</label>
                <input id="password" type="password" name="password" />
                <input value="Create Account" className="btn" type="submit" />
            </form>
        
    )
}

export default CreateAcc;