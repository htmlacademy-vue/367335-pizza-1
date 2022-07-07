import { createLocalVue, mount } from "@vue/test-utils";
import "@/plugins/ui";
import { USER } from "@/store/mocks/data";
import { adaptUserData } from "@/common/helpers";
import ProfileUser from "@/modules/profile/components/ProfileUser";

const localVue = createLocalVue();

describe("ProfileUser", () => {
  const user = adaptUserData(USER);
  let wrapper;

  const createComponent = () => {
    wrapper = mount(ProfileUser, {
      localVue,
      propsData: { user },
    });
  };

  afterEach(() => {
    wrapper.destroy();
  });

  it("Is rendered", () => {
    createComponent();

    expect(wrapper.find(".user").exists()).toBeTruthy();
  });

  it("It contains correct content", () => {
    createComponent();

    const imgWrapper = wrapper.find("img");
    const nameWrapper = wrapper.find(".user__name");
    const phoneWrapper = wrapper.find(".user__phone");

    expect(imgWrapper.attributes("src")).toStrictEqual(user.srcset.x2);
    expect(nameWrapper.text()).toStrictEqual(user.name);
    expect(phoneWrapper.text()).toContain(user.phone);
  });
});