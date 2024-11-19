import { MenuOptionProps } from "components/NavigationBar/types";

export const routes: MenuOptionProps[] = [
    {
        iconName: "IoHome",
        name: "Home",
        path: "/"
    },
    {
        iconName: "IoPersonSharp",
        name: "Usuários",
        path: "/customers"
    },
    {
        iconName: "IoMap",
        name: "Locais",
        path: "/locals"
    },
    {
        iconName: "IoLockClosed",
        name: "Acessos",
        path: "/access"
    },
    {
        iconName: "IoPeopleSharp",
        name: "Grupos",
        path: "/groups"
    },
    {
        iconName: "IoOptions",
        name: "Configurações",
        path: "/configs"
    },
    {
        iconName: "IoExit",
        name: "Sair",
        path: "/leave"
    },
]