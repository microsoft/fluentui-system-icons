package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudCheckmark16: ImageVector
  get() {
    if (_cloudCheckmark16 != null) {
      return _cloudCheckmark16!!
    }
    _cloudCheckmark16 = fluentIcon(name = "Filled.CloudCheckmark16", 16f) {
      materialPath {
          moveTo(4.03F, 5.507F)
          curveTo(4.273F, 3.531F, 5.958F, 2.0F, 8.0F, 2.0F)
          curveToRelative(1.93F, 0.0F, 3.54F, 1.366F, 3.917F, 3.184F)
          curveTo(11.465F, 5.064F, 10.99F, 5.0F, 10.5F, 5.0F)
          curveTo(7.462F, 5.0F, 5.0F, 7.462F, 5.0F, 10.5F)
          curveToRelative(0.0F, 0.52F, 0.072F, 1.023F, 0.207F, 1.5F)
          horizontalLineTo(4.25F)
          curveTo(2.455F, 12.0F, 1.0F, 10.545F, 1.0F, 8.75F)
          curveToRelative(0.0F, -1.721F, 1.338F, -3.13F, 3.03F, -3.243F)
          close()
          moveTo(15.0F, 10.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 12.985F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(15.0F, 8.015F, 15.0F, 10.5F)
          close()
          moveToRelative(-2.146F, -1.854F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(9.5F, 11.293F)
          lineToRelative(-0.646F, -0.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _cloudCheckmark16!!
  }

private var _cloudCheckmark16: ImageVector? = null
