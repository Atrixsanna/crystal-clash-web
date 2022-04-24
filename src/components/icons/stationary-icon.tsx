import css from "./icon.module.scss";
import {SvgIcon} from "@mui/material";

export function StationaryIcon() {

    return <span title="Stationary" className={css.container}>
        <SvgIcon color="success" width={512} height={512} viewBox="0 0 512 512" fontSize={"small"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{height: 512, width: 512}}
            >
                     <path
                         d="M256 17.108c-75.73 0-137.122 61.392-137.122 137.122.055 23.25 6.022 46.107 11.58 56.262L256 494.892l119.982-274.244h-.063a137.131 137.131 0 0017.202-66.418C393.122 78.5 331.73 17.108 256 17.108zm0 68.56a68.56 68.56 0 0168.56 68.562A68.56 68.56 0 01256 222.79a68.56 68.56 0 01-68.56-68.56A68.56 68.56 0 01256 85.67z"
                     ></path>
            </svg>
        </SvgIcon>
    </span>
}
