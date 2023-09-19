package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneVerticalScroll24: ImageVector
  get() {
    if (_phoneVerticalScroll24 != null) {
      return _phoneVerticalScroll24!!
    }
    _phoneVerticalScroll24 = fluentIcon(name = "Filled.PhoneVerticalScroll24", 24f) {
      materialPath {
          moveTo(15.75F, 2.0F)
          curveTo(16.993F, 2.0F, 18.0F, 3.007F, 18.0F, 4.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-7.5F)
          curveTo(7.007F, 22.0F, 6.0F, 20.993F, 6.0F, 19.75F)
          verticalLineTo(4.25F)
          curveTo(6.0F, 3.007F, 7.007F, 2.0F, 8.25F, 2.0F)
          horizontalLineToRelative(7.5F)
          close()
          moveToRelative(-2.036F, 11.475F)
          lineTo(12.0F, 15.225F)
          lineToRelative(-1.718F, -1.75F)
          curveToRelative(-0.29F, -0.296F, -0.765F, -0.3F, -1.06F, -0.01F)
          curveToRelative(-0.296F, 0.29F, -0.3F, 0.765F, -0.01F, 1.06F)
          lineToRelative(2.253F, 2.296F)
          curveToRelative(0.294F, 0.3F, 0.777F, 0.3F, 1.07F, 0.0F)
          lineToRelative(2.25F, -2.296F)
          curveToRelative(0.29F, -0.296F, 0.286F, -0.77F, -0.01F, -1.06F)
          curveToRelative(-0.296F, -0.29F, -0.77F, -0.286F, -1.06F, 0.01F)
          close()
          moveToRelative(1.072F, -3.954F)
          lineToRelative(-2.25F, -2.296F)
          curveToRelative(-0.268F, -0.273F, -0.69F, -0.297F, -0.987F, -0.075F)
          lineToRelative(-0.084F, 0.075F)
          lineTo(9.212F, 9.52F)
          curveToRelative(-0.29F, 0.295F, -0.286F, 0.77F, 0.01F, 1.06F)
          curveToRelative(0.269F, 0.264F, 0.685F, 0.284F, 0.977F, 0.064F)
          lineToRelative(0.083F, -0.074F)
          lineTo(12.0F, 8.821F)
          lineToRelative(1.714F, 1.75F)
          curveToRelative(0.29F, 0.296F, 0.765F, 0.3F, 1.061F, 0.01F)
          curveToRelative(0.269F, -0.263F, 0.297F, -0.68F, 0.082F, -0.975F)
          lineTo(14.786F, 9.52F)
          lineToRelative(-2.25F, -2.296F)
          lineToRelative(2.25F, 2.296F)
          close()        
      }
    }
    return _phoneVerticalScroll24!!
  }

private var _phoneVerticalScroll24: ImageVector? = null
