Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {beforeWrite: function(fileObj){
    return {
      name: "image",
      extension: "png"
    };
  },path: "~/uploads"})]
});
