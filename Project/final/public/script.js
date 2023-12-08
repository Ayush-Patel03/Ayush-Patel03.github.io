const getStaffMembers = async () => {
    try {
      return (await fetch("/api/staff")).json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showStaffMembers = async () => {
    let staffMembers = await getStaffMembers();
    let staffMembersDiv = document.getElementById("staff-list");
    staffMembersDiv.innerHTML = "";
    staffMembers.forEach((staffMember) => {
      const section = document.createElement("section");
      section.classList.add("staff-member");
      staffMembersDiv.append(section);
  
      const a = document.createElement("a");
      a.href = "#";
      section.append(a);
  
      const h3 = document.createElement("h3");
      h3.innerHTML = staffMember.name;
      a.append(h3);
  
      const p = document.createElement("p");
      p.innerHTML = staffMember.title;
      section.append(p);
  
      const img = document.createElement("img");
      img.src = staffMember.img;
      section.append(img);
  
      a.onclick = (e) => {
        e.preventDefault();
        displayDetails(staffMember);
      };
    });
  };
  
  const displayDetails = (staffMember) => {
    const staffMemberDetails = document.getElementById("staff-member-details");
    staffMemberDetails.innerHTML = "";
  
    const h3 = document.createElement("h3");
    h3.innerHTML = staffMember.name;
    staffMemberDetails.append(h3);
  
    const p = document.createElement("p");
    p.innerHTML = staffMember.title;
    staffMemberDetails.append(p);
  
    const dLink = document.createElement("a");
    dLink.innerHTML = "	&#x2715;";
    staffMemberDetails.append(dLink);
    dLink.id = "delete-link";
  
    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;";
    staffMemberDetails.append(eLink);
    eLink.id = "edit-link";
  
    const description = document.createElement("p");
    staffMemberDetails.append(description);
    description.innerHTML = staffMember.description;
  
    eLink.onclick = (e) => {
      e.preventDefault();
      document.querySelector(".dialog").classList.remove("transparent");
      document.getElementById("add-edit-title").innerHTML = "Edit Staff Member";
    };
  
    dLink.onclick = (e) => {
      e.preventDefault();
      deleteStaffMember(staffMember);
    };
  
    populateEditForm(staffMember);
  };
  
  const deleteStaffMember = async (staffMember) => {
    let response = await fetch(`/api/staff/${staffMember._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  
    if (response.status != 200) {
      console.log("error deleting");
      return;
    }
  
    let result = await response.json();
    showStaffMembers();
    document.getElementById("staff-member-details").innerHTML = "";
    resetForm();
  };
  
  const populateEditForm = (staffMember) => {
    const form = document.getElementById("add-edit-staff-member-form");
    form._id.value = staffMember._id;
    form.name.value = staffMember.name;
    form.title.value = staffMember.title;
    form.description.value = staffMember.description;
  };
  
  const addEditStaffMember = async (e) => {
    e.preventDefault();
    const form = document.getElementById("add-edit-staff-member-form");
    const formData = new FormData(form);
  
    //trying to add a new staff member
    if (form._id.value == -1) {
      formData.delete("_id");
  
      response = await fetch("/api/staff", {
        method: "POST",
        body: formData,
      });
    }
    //edit an existing staff member
    else {
      response = await fetch(`/api/staff/${form._id.value}`, {
        method: "PUT",
        body: formData,
      });
    }
  
    //successfully got data from server
    if (response.status != 200) {
      console.log("Error posting data");
    }
  
    staffMember = await response.json();
  
    if (form._id.value != -1) {
      displayDetails(staffMember);
    }
  
    resetForm();
    document.querySelector(".dialog").classList.add("transparent");
    showStaffMembers();
  };
  
  const resetForm = () => {
    const form = document.getElementById("add-edit-staff-member-form");
    form.reset();
    form._id = "-1";
  };
  
  const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-edit-title").innerHTML = "Add Staff Member";
    resetForm();
  };
  
  window.onload = () => {
    showStaffMembers();
    document.getElementById("add-edit-staff-member-form").onsubmit = addEditStaffMember;
    document.getElementById("add-link").onclick = showHideAdd;
  
    document.querySelector(".close").onclick = () => {
      document.querySelector(".dialog").classList.add("transparent");
    };
  };
  