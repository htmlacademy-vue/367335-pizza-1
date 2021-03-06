import { mount, RouterLinkStub } from "@vue/test-utils";
import "@/plugins/ui";
import { Message } from "@/common/constants";
import BaseLogo from "@/common/components/BaseLogo";

describe("BaseLogo", () => {
  const stubs = { RouterLink: RouterLinkStub };

  let wrapper;
  const createComponent = () => {
    wrapper = mount(BaseLogo, { stubs });
  };

  it("Is rendered", () => {
    createComponent();
    expect(wrapper.find("a.logo").exists()).toBeTruthy();
  });

  it("Is link with .logo class", () => {
    createComponent();
    const linkWrapper = wrapper.find("a");
    expect(linkWrapper.classes()).toContain("logo");
  });

  it("Has image with alternative logo text", () => {
    createComponent();
    const imgWrapper = wrapper.find("img");
    expect(imgWrapper.attributes("alt")).toStrictEqual(Message.LOGO);
  });
});
