export const copyCname = () => {
    return app.gulp.src("./src/CNAME").pipe(app.gulp.dest("./dist"));
};
