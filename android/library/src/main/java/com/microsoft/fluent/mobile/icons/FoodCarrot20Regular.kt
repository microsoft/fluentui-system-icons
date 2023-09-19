package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FoodCarrot20: ImageVector
  get() {
    if (_foodCarrot20 != null) {
      return _foodCarrot20!!
    }
    _foodCarrot20 = fluentIcon(name = "Regular.FoodCarrot20", 20f) {
      materialPath {
          moveTo(17.854F, 2.854F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineTo(14.0F, 5.292F)
          verticalLineTo(2.5F)
          curveTo(14.0F, 2.224F, 13.776F, 2.0F, 13.5F, 2.0F)
          reflectiveCurveTo(13.0F, 2.224F, 13.0F, 2.5F)
          verticalLineToRelative(2.877F)
          curveToRelative(-1.579F, -0.786F, -3.59F, -0.34F, -4.64F, 1.206F)
          lineToRelative(-6.087F, 8.946F)
          curveTo(1.845F, 16.16F, 1.927F, 17.0F, 2.47F, 17.536F)
          curveToRelative(0.55F, 0.544F, 1.416F, 0.619F, 2.053F, 0.178F)
          lineToRelative(8.93F, -6.184F)
          curveToRelative(1.512F, -1.047F, 1.943F, -2.992F, 1.176F, -4.53F)
          horizontalLineTo(17.5F)
          curveTo(17.776F, 7.0F, 18.0F, 6.776F, 18.0F, 6.5F)
          reflectiveCurveTo(17.776F, 6.0F, 17.5F, 6.0F)
          horizontalLineToRelative(-2.793F)
          lineToRelative(3.146F, -3.146F)
          close()
          moveToRelative(-8.66F, 4.284F)
          curveToRelative(0.922F, -1.355F, 2.865F, -1.541F, 4.032F, -0.386F)
          curveToRelative(1.154F, 1.142F, 0.986F, 3.037F, -0.35F, 3.963F)
          lineToRelative(-8.93F, 6.184F)
          curveToRelative(-0.238F, 0.164F, -0.56F, 0.136F, -0.766F, -0.066F)
          curveToRelative(-0.202F, -0.2F, -0.232F, -0.514F, -0.073F, -0.748F)
          lineToRelative(6.087F, -8.947F)
          close()        
      }
    }
    return _foodCarrot20!!
  }

private var _foodCarrot20: ImageVector? = null
