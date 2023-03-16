import classes from "./CssModules.module.scss";

export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>CssModuleやで</p>
            <button className={classes.button}>押してみ</button>
        </div>
    );
};