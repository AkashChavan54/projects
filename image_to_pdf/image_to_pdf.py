import cv2
import img2pdf
from PIL import Image
import os
from fpdf import FPDF


print("do you want to convert one file or many? ")
type_of = input("press 1 for one and 2 for many : ")
if type_of == "1":
    path_of_image = input("Path of image with image format: ")
    save = os.path.dirname(path_of_image)

    img_grey = cv2.imread(path_of_image, cv2.IMREAD_GRAYSCALE)
    img_binary = cv2.threshold(img_grey, 200, 300, cv2.THRESH_BINARY)[1]
    cv2.imwrite(save + "/new.jpeg", img_binary)

    img_path = save + "/new.jpeg"
    pdf_path = save + "/new.pdf"

    image = Image.open(img_path)
    pdf_bytes = img2pdf.convert(image.filename)
    file = open(pdf_path, "wb")
    file.write(pdf_bytes)
    image.close()
    file.close()
    os.remove(save + "/new.jpeg")

elif type_of == "2":
    print("Do you want all these images in one pdf?")
    pages=input("Press 1 for one pdf else 2: ")
    if pages=="1":
        pdf = FPDF()
        path_of_folder = input("Path of folder with images: ")
        folder_with_files = os.listdir(path_of_folder)
        for i in range(len(folder_with_files)):
            img_grey = cv2.imread(path_of_folder +"/"+ folder_with_files[i], cv2.IMREAD_GRAYSCALE)
            img_binary = cv2.threshold(img_grey, 200, 300, cv2.THRESH_BINARY)[1]
            cv2.imwrite(path_of_folder+"/new.jpeg", img_binary)

            pdf.add_page()
            pdf.image(path_of_folder+"/new.jpeg", 0, 0)
            
            os.remove(path_of_folder+"/new.jpeg")
        pdf.output(path_of_folder + "newpdf" + ".pdf", "F")

        
    else:
        path_of_folder = input("Path of folder with images: ")
        folder_with_files = os.listdir(path_of_folder)
        for i in range(len(folder_with_files)):
            img_grey = cv2.imread(path_of_folder +"/"+ folder_with_files[i], cv2.IMREAD_GRAYSCALE)
            img_binary = cv2.threshold(img_grey, 200, 300, cv2.THRESH_BINARY)[1]
            cv2.imwrite(path_of_folder+"/new.jpeg", img_binary)

            img_path = path_of_folder+"/new.jpeg"
            pdf_path = path_of_folder + "/new" + str(i) + ".pdf"

            image = Image.open(img_path)
            pdf_bytes = img2pdf.convert(image.filename)
            file = open(pdf_path, "wb")
            file.write(pdf_bytes)
            image.close()
            file.close()

            os.remove(path_of_folder+"/new.jpeg")


else:
    print("worng")