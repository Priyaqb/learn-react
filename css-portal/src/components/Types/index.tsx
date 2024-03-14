export interface Name {
    first: string;
    last: string;
}
export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}
export interface Projects {
    projectId: string;
    name: string;
    allocationPercentage: number;
}

export interface Item {
    name: Name;
    userId: string;
    employeeID: string;
    designation: string;
    stream: string;
    dob: string;
    hiredOn: string;
    email: string;
    phone: string;
    address: Address;
    projects: Projects[];
    department: string;
    gender: string;
    portrait: string;
    virtualTeam: string;
    grade: string;
    skills: string[]
}