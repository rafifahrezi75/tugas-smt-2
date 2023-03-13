import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialForm = {
    name : "",
    slug : "",
    pelanggan : "",
    alamat : "",
    telp : "" ,
    product : "",
    description : "",
    category : "",
    price : ""
  }

export const SkillProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const [carts, setCarts] = useState([]);
  const [productCart, setProductCart] = useState([]);
  const [pelangganCart, setPelangganCart] = useState([]);

  const [pelanggans, setPelanggans] = useState([]);
  const [pelanggan, setPelanggan] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name] : value });
  };

  const getSkills = async () => {
    const apiSkills = await axios.get("skills");
    setSkills(apiSkills.data.data);
  };

  const getSkill = async (id) => {
    const response = await axios.get("skills/" + id);
    const apiSkill = response.data.data;
    setSkill(apiSkill);
    setFormValues({
      name : apiSkill.name,
      slug : apiSkill.slug
    });
  };

  const storeSkill = async (e) => {
    e.preventDefault();
    try{
      await axios.post("skills", formValues);
      setFormValues(initialForm);
      navigate("/skills");
    } catch(e) {
      if(e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const updateSkill = async (e) => {
    e.preventDefault();
    try{
      await axios.put("skills/" + skill.id, formValues);
      getSkills();
      navigate("/skills");
    } catch(e) {
      if(e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteSkill = async (id) => {
    if(!window.confirm("Are You Sure ?")) {
      return;
    }
    await axios.delete("skills/" + id);
    getSkills();
  };

  //      Product
  const getProducts = async () => {
    const apiProducts = await axios.get("product");
    setProducts(apiProducts.data.data);
  };

  const getProduct = async (id) => {
    const response = await axios.get("product/" + id);
    const apiProduct = response.data.data;
    setProduct(apiProduct);
    setFormValues({
      product : apiProduct.product,
      description : apiProduct.description,
      category : apiProduct.category,
      price : apiProduct.price
    });
  };

  const storeProduct = async (e) => {
    e.preventDefault();
    try{
      await axios.post("product", formValues);
      setFormValues(initialForm);
      navigate("/product");
    } catch(e) {
      if(e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try{
      await axios.put("product/" + product.id, formValues);
      getProduct();
      navigate("/product");
    } catch(e) {
      if(e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteProduct = async (id) => {
    if(!window.confirm("Are You Sure ?")) {
      return;
    }
    await axios.delete("product/" + id);
    getProducts();
  };

  //      Pelanggan

  const getPelanggans = async () => {
    const apiPelanggans = await axios.get("pelanggan");
    setPelanggans(apiPelanggans.data.data);
  };

  const getPelanggan = async (id) => {
    const response = await axios.get("pelanggan/" + id);
    const apiPelanggan = response.data.data;
    setPelanggan(apiPelanggan);
    setFormValues({
      pelanggan : apiPelanggan.pelanggan,
      alamat : apiPelanggan.alamat,
      telp : apiPelanggan.telp
    });
  };

  const storePelanggan = async (e) => {
    e.preventDefault();
    try{
      await axios.post("pelanggan", formValues);
      setFormValues(initialForm);
      navigate("/pelanggan");
    } catch(e) {
      if(e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const updatePelanggan = async (e) => {
    e.preventDefault();
    try{
      await axios.put("pelanggan/" + pelanggan.id, formValues);
      getPelanggans();
      navigate("/pelanggan");
    } catch(e) {
      if(e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deletePelanggan = async (id) => {
    if(!window.confirm("Are You Sure ?")) {
      return;
    }
    await axios.delete("pelanggan/" + id);
    getPelanggans();
  };

  //    Cart

  const getCarts = async () => {
    const apiCarts = await axios.get("orderdetail");
    setCarts(apiCarts.data.data);
  };

  const getProductCart = async (id) => {
    const response = await axios.get("product/" + id);
    const apiProductCart = response.data.data;
    setProductCart(apiProductCart);
  };

  const getPelangganCart = async (id) => {
    const response = await axios.get("pelanggan/" + id);
    const apiPelangganCart = response.data.data;
    setPelangganCart(apiPelangganCart);
  };

  return (
    <SkillContext.Provider value = {{ skill, skills, getSkill, getSkills, onChange, formValues, storeSkill, errors, setErrors, updateSkill, deleteSkill,
      pelanggans, getPelanggans, pelanggan, getPelanggan, storePelanggan, updatePelanggan, deletePelanggan,
      products, getProducts, product, getProduct, storeProduct, updateProduct, deleteProduct,
      productCart, getProductCart, pelangganCart, getPelangganCart, carts, getCarts
    }}>{children}</SkillContext.Provider>
  );
};

export default SkillContext;