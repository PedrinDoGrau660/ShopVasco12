import { StyleSheet } from "react-native"; 

export const style = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: "#000000ff", 
    alignItems: "center",
  }, 
  pagesSection: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  pagesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#ffffffff",
    textAlign: "center",
  },
  pagesContainer: {
    width: "100%",
  },
  pagesContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pageOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: "transparent",
  },
  pageOptionSelected: {
    borderColor: "#ffffffff",
    backgroundColor: "#ffffffff",
  },
  pageNumber: {
    color: "#ffffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  pageNumberSelected: {
    color: "#000000ff",
    fontWeight: "bold",
  },
});