package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneCheckmark16: ImageVector
  get() {
    if (_phoneCheckmark16 != null) {
      return _phoneCheckmark16!!
    }
    _phoneCheckmark16 = fluentIcon(name = "Filled.PhoneCheckmark16", 16f) {
      materialPath {
          moveTo(10.5F, 11.0F)
          curveToRelative(0.52F, 0.0F, 1.023F, -0.072F, 1.5F, -0.207F)
          verticalLineToRelative(2.457F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-4.5F)
          curveTo(4.784F, 15.0F, 4.0F, 14.216F, 4.0F, 13.25F)
          verticalLineTo(2.75F)
          curveTo(4.0F, 1.784F, 4.784F, 1.0F, 5.75F, 1.0F)
          horizontalLineToRelative(1.587F)
          curveTo(5.923F, 1.995F, 5.0F, 3.64F, 5.0F, 5.5F)
          curveTo(5.0F, 8.538F, 7.462F, 11.0F, 10.5F, 11.0F)
          close()
          moveTo(7.0F, 12.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(6.724F, 13.0F, 7.0F, 13.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(9.276F, 12.0F, 9.0F, 12.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(8.0F, -6.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 7.985F, 6.0F, 5.5F)
          reflectiveCurveTo(8.015F, 1.0F, 10.5F, 1.0F)
          reflectiveCurveTo(15.0F, 3.015F, 15.0F, 5.5F)
          close()
          moveToRelative(-2.146F, -1.853F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineTo(9.5F, 6.293F)
          lineTo(8.854F, 5.646F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _phoneCheckmark16!!
  }

private var _phoneCheckmark16: ImageVector? = null
