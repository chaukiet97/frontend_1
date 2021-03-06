import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from "./modules/header/header.component";
import { FooterComponent } from "./modules/footer/footer.component";
import { BannerComponent } from './modules/banner/banner.component';
import { BoxAboutComponent } from './modules/box-about/box-about.component';
import { BoxServicesComponent } from './modules/box-services/box-services.component';
import { BoxProjectComponent } from './modules/box-project/box-project.component';
import { BoxTeammemberComponent } from './modules/box-teammember/box-teammember.component';
import { BoxCounterComponent } from './modules/box-counter/box-counter.component';
import { BoxWorkComponent } from './modules/box-work/box-work.component';
import { BoxWorkwithComponent } from './modules/box-workwith/box-workwith.component';
import { BoxTestmonialComponent } from './modules/box-testmonial/box-testmonial.component';
import { BoxVideoComponent } from './modules/box-video/box-video.component';
import { BoxBlogComponent } from './modules/box-blog/box-blog.component';
import { BoxPriceComponent } from './modules/box-price/box-price.component';
import { BoxBrandComponent } from './modules/box-brand/box-brand.component';
import { BoxNewslaterComponent } from './modules/box-newslater/box-newslater.component';
import { BoxContactComponent } from './modules/box-contact/box-contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
  {
    path: '', component: FrontendComponent,
    children: [
      { path: '', redirectTo: 'trang-chu', pathMatch: "full" },
      { path: 'trang-chu', component: HomeComponent },
      { path: 'about-us', component: AboutComponent },
      { path: 'sevices', component: ServiceComponent },
      { path: 'our-team', component: TeamComponent },
      { path: 'testimonial', component: TestimonialComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  }
]
@NgModule({
  declarations: [
    FrontendComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BoxAboutComponent,
    BoxServicesComponent,
    BoxProjectComponent,
    BoxTeammemberComponent,
    BoxCounterComponent,
    BoxWorkComponent,
    BoxWorkwithComponent,
    BoxTestmonialComponent,
    BoxVideoComponent,
    BoxBlogComponent,
    BoxPriceComponent,
    BoxBrandComponent,
    BoxNewslaterComponent,
    BoxContactComponent,
    AboutComponent,
    ServiceComponent,
    TeamComponent,
    BlogComponent,
    ContactComponent,
    TestimonialComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FrontendModule { }
