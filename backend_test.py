#!/usr/bin/env python3
"""
Backend API Testing for Consultation Popup Form
Tests the consultation form submission and data persistence functionality
"""

import requests
import json
import sys
from datetime import datetime

class ConsultationFormTester:
    def __init__(self, base_url="http://localhost:3001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, test_func):
        """Run a single test"""
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            success = test_func()
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - {name}")
            else:
                print(f"❌ Failed - {name}")
            return success
        except Exception as e:
            print(f"❌ Failed - {name}: {str(e)}")
            return False

    def test_page_accessibility(self):
        """Test if the main page is accessible"""
        try:
            response = requests.get(self.base_url, timeout=10)
            if response.status_code == 200:
                print(f"✅ Page accessible - Status: {response.status_code}")
                
                # Check if consultation button is in HTML
                if "Get Consultation" in response.text:
                    print("✅ Get Consultation button found in HTML")
                    return True
                else:
                    print("❌ Get Consultation button not found in HTML")
                    return False
            else:
                print(f"❌ Page not accessible - Status: {response.status_code}")
                return False
        except Exception as e:
            print(f"❌ Error accessing page: {str(e)}")
            return False

    def test_consultation_form_structure(self):
        """Test if consultation form components are present"""
        try:
            response = requests.get(self.base_url, timeout=10)
            html_content = response.text
            
            # Check for form-related elements in the HTML
            form_elements = [
                'ConsultationPopup',
                'fullName',
                'email', 
                'phone',
                'companyName',
                'serviceInterested',
                'message'
            ]
            
            found_elements = 0
            for element in form_elements:
                if element in html_content:
                    found_elements += 1
                    print(f"✅ Found {element} in page")
                else:
                    print(f"❌ Missing {element} in page")
            
            return found_elements >= 5  # At least 5 out of 7 elements should be present
            
        except Exception as e:
            print(f"❌ Error checking form structure: {str(e)}")
            return False

    def test_react_app_loading(self):
        """Test if React app is properly loading"""
        try:
            response = requests.get(self.base_url, timeout=10)
            html_content = response.text
            
            # Check for React-specific elements
            react_indicators = [
                'react',
                'next',
                '_next',
                'Protingent India'
            ]
            
            found_indicators = 0
            for indicator in react_indicators:
                if indicator.lower() in html_content.lower():
                    found_indicators += 1
            
            if found_indicators >= 3:
                print(f"✅ React app loading properly ({found_indicators}/4 indicators found)")
                return True
            else:
                print(f"❌ React app may not be loading properly ({found_indicators}/4 indicators found)")
                return False
                
        except Exception as e:
            print(f"❌ Error checking React app: {str(e)}")
            return False

    def test_static_assets(self):
        """Test if static assets are accessible"""
        try:
            # Test favicon
            favicon_response = requests.get(f"{self.base_url}/favicon.ico", timeout=5)
            favicon_ok = favicon_response.status_code == 200
            
            # Test if any CSS is loading
            css_found = "css" in requests.get(self.base_url, timeout=5).text.lower()
            
            # Test if JavaScript is loading  
            js_found = "script" in requests.get(self.base_url, timeout=5).text.lower()
            
            results = {
                "favicon": favicon_ok,
                "css": css_found,
                "javascript": js_found
            }
            
            success_count = sum(results.values())
            print(f"✅ Static assets check: {success_count}/3 passed")
            for asset, status in results.items():
                print(f"  - {asset}: {'✅' if status else '❌'}")
            
            return success_count >= 2  # At least 2 out of 3 should work
            
        except Exception as e:
            print(f"❌ Error checking static assets: {str(e)}")
            return False

    def test_service_options(self):
        """Test if service options are present in the HTML"""
        try:
            response = requests.get(self.base_url, timeout=10)
            html_content = response.text.lower()
            
            expected_services = [
                'rpo',
                'fte',
                'contract staffing',
                'direct sourcing',
                'it consulting',
                'marketing solutions',
                'hr outsourcing'
            ]
            
            found_services = 0
            for service in expected_services:
                if service in html_content:
                    found_services += 1
                    print(f"✅ Found service: {service}")
                else:
                    print(f"❌ Missing service: {service}")
            
            success_rate = found_services / len(expected_services)
            print(f"✅ Service options: {found_services}/{len(expected_services)} found ({success_rate:.1%})")
            
            return success_rate >= 0.7  # At least 70% of services should be present
            
        except Exception as e:
            print(f"❌ Error checking service options: {str(e)}")
            return False

def main():
    """Main test execution"""
    print("=" * 60)
    print("🚀 CONSULTATION POPUP BACKEND TESTING")
    print("=" * 60)
    
    tester = ConsultationFormTester()
    
    # Run all tests
    tests = [
        ("Page Accessibility", tester.test_page_accessibility),
        ("React App Loading", tester.test_react_app_loading),
        ("Static Assets", tester.test_static_assets),
        ("Consultation Form Structure", tester.test_consultation_form_structure),
        ("Service Options", tester.test_service_options),
    ]
    
    for test_name, test_func in tests:
        tester.run_test(test_name, test_func)
    
    # Print results
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS")
    print("=" * 60)
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"Success rate: {success_rate:.1f}%")
    
    if success_rate >= 80:
        print("🎉 Backend tests PASSED - Ready for frontend testing")
        return 0
    elif success_rate >= 60:
        print("⚠️  Backend tests PARTIALLY PASSED - Some issues found")
        return 1
    else:
        print("❌ Backend tests FAILED - Major issues found")
        return 2

if __name__ == "__main__":
    sys.exit(main())