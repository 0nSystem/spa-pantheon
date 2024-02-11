export interface ApplicationWithUserDataDTO {
    applicationData: ApplicationDataDTO,
    users: UserDataInApplicationDTO[]
}

export interface ApplicationDataDTO {
    applicationInfo: ApplicationInfoDTO,
    attributesInfo: AttributeInfoDTO[],
    rolesInfo: RoleInfoDTO[],
    permissionInfo: PermissionInfoDTO[]
}

export interface ApplicationInfoDTO {
    idApplication: number,
    name: string,
    description: string,
    highDate: number,
    highIdUser: number
}

export interface PermissionInfoDTO {
    idPermission: number,
    name: string,
    description: string
}

export interface RoleInfoDTO {
    idRole: number,
    name: string,
    description: string
}

export interface AttributeInfoDTO {
    idAttribute: number,
    name: string,
    description: string
}


export interface UserDataInApplicationDTO {
    userInfo: UserInfoDTO,
    permissions: PermissionInfoDTO[],
    role: RoleInfoDTO[],
    attribute: AttributeUserDataDTO[]
}

export interface UserInfoDTO {
    idUser: number,
    name: string,
    surname: string,
    email: string,
    login: string,
    highDate: number,
    highIdUser: number,
}

export interface AttributeUserDataDTO {
    attributeId: number,
    userId: number,
    name: string,
    description: string,
    values: string[]
}


