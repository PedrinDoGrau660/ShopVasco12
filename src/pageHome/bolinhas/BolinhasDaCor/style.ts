import { StyleSheet } from "react-native"; 

export const style = StyleSheet.create({ 
        container: { 
    flex: 1, 
    backgroundColor: "#000000ff", 
  }, 
   colorsSection: {
    width: "100%",
    paddingHorizontal: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  colorsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#ffffffff",
  },
  colorsContainer: {
    width: "100%",
  },
  colorsContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorOption: {
    
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
  },
  colorOptionSelected: {
    borderColor: "#ffffffff",
  },
  colorCheckmark: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
}); 