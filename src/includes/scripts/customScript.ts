import db from "../../backend/db";


const navigateTo = (page:string)=>{
    window.location.href = page;
}
export const navigateToApp = (): void | null => {
  navigateTo("/app");
};

export const navigateToHome = (): void | null => {
  navigateTo("/");
};

export const navigateToSupport = (): void | null => {
  navigateTo("/app/support");
};



export const navigateToGithubProject = (): void | null => {
  navigateTo("https://github.com/Adedoyin-Emmanuel/Clip-Save");
};

export const navigateToGithubProfile = (): void | null => {
  navigateTo("https://github.com/Adedoyin-Emmanuel");
};

export const checkIfHomePageSeen = ():void | null =>
{   
    //check localstorage if key exists
    if(db.get("CLIPSAVE_HOME_PAGE_SEEN") === "true")
    {
        navigateToApp();
    }else{
        //pass
    }
}