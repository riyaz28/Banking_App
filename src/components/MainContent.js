import React, { useState, useEffect } from "react";
import { AccountDetails } from "./AccountDetails";

export const MainContent = (props) => {
    const users = props.users;
    const {editingUser, setEditingUser, setEditModal, setDeleteUser} = props;
    const [isCurrentUserAdmin, setIsCurrentUserAdmin] = useState(false);

    useEffect(() => {
      const localUser = JSON.parse(localStorage.getItem('currentUser'));
      setIsCurrentUserAdmin(localUser.isAdmin);
    }, [isCurrentUserAdmin]);
    
    const bankAccounts = users.map((user, index) => {
      return <AccountDetails key={index} index={index} fullname={user.fullname} 
        type={user.type} 
        isAdmin={isCurrentUserAdmin} 
        accountNumber={user.number} 
        balance={user.balance} 
        editingUser={editingUser} 
        setEditingUser={setEditingUser} setEditModal={setEditModal} 
        setDeleteUser={setDeleteUser} />
    });
      
    return (
      <section id="main-content">
        {bankAccounts}
      </section>
    )
    
  }