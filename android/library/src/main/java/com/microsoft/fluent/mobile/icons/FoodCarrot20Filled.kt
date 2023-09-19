package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FoodCarrot20: ImageVector
  get() {
    if (_foodCarrot20 != null) {
      return _foodCarrot20!!
    }
    _foodCarrot20 = fluentIcon(name = "Filled.FoodCarrot20", 20f) {
      materialPath {
          moveTo(17.853F, 2.854F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineTo(14.0F, 5.292F)
          verticalLineTo(2.5F)
          curveTo(14.0F, 2.224F, 13.776F, 2.0F, 13.5F, 2.0F)
          reflectiveCurveTo(13.0F, 2.224F, 13.0F, 2.5F)
          verticalLineToRelative(2.877F)
          curveToRelative(-1.58F, -0.786F, -3.588F, -0.34F, -4.64F, 1.205F)
          lineToRelative(-6.086F, 8.946F)
          curveTo(1.846F, 16.16F, 1.928F, 17.0F, 2.47F, 17.536F)
          curveToRelative(0.55F, 0.544F, 1.415F, 0.619F, 2.052F, 0.178F)
          lineToRelative(8.93F, -6.184F)
          curveToRelative(1.513F, -1.047F, 1.944F, -2.992F, 1.177F, -4.53F)
          horizontalLineToRelative(2.87F)
          curveTo(17.777F, 7.0F, 18.0F, 6.776F, 18.0F, 6.5F)
          reflectiveCurveTo(17.777F, 6.0F, 17.5F, 6.0F)
          horizontalLineToRelative(-2.793F)
          lineToRelative(3.147F, -3.146F)
          close()        
      }
    }
    return _foodCarrot20!!
  }

private var _foodCarrot20: ImageVector? = null
