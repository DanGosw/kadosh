// import type { InterfaceAxiosApiNoPaginate/*, InterfaceAxiosApiResponse*/ } from "@/composable/InterfaceAxiosApiNoPaginate.ts";

export interface InterfaceMembers {
    birthdate: Date | Date[] | (Date | null)[] | null | string;
    church: number | null;
    doc_num: string;
    docType: number | null;
    gender: string;
    isMember: string;
    lastnames: string;
    names: string;
    phone: string;
    id?: number;
    status: boolean
}

// export type InterfaceResponseMembers = InterfaceAxiosApiNoPaginate<InterfaceMembers>
// export type UsersActiosMembers = InterfaceAxiosApiResponse<InterfaceMembers>