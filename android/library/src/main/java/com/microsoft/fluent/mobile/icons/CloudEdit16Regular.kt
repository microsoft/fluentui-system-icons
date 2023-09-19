package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CloudEdit16: ImageVector
  get() {
    if (_cloudEdit16 != null) {
      return _cloudEdit16!!
    }
    _cloudEdit16 = fluentIcon(name = "Regular.CloudEdit16", 16f) {
      materialPath {
          moveTo(5.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(1.638F, 0.0F, 2.97F, 1.313F, 3.0F, 2.943F)
          lineToRelative(0.102F, -0.102F)
          curveToRelative(0.248F, -0.248F, 0.53F, -0.441F, 0.83F, -0.58F)
          curveTo(11.586F, 3.406F, 9.957F, 2.0F, 8.0F, 2.0F)
          curveTo(5.958F, 2.0F, 4.273F, 3.53F, 4.03F, 5.507F)
          curveTo(2.338F, 5.62F, 1.0F, 7.03F, 1.0F, 8.75F)
          curveTo(1.0F, 10.545F, 2.455F, 12.0F, 4.25F, 12.0F)
          horizontalLineToRelative(1.225F)
          curveToRelative(0.11F, -0.361F, 0.283F, -0.7F, 0.51F, -1.0F)
          horizontalLineTo(4.25F)
          curveTo(3.007F, 11.0F, 2.0F, 9.993F, 2.0F, 8.75F)
          reflectiveCurveTo(3.007F, 6.5F, 4.25F, 6.5F)
          horizontalLineTo(4.5F)
          curveTo(4.776F, 6.5F, 5.0F, 6.276F, 5.0F, 6.0F)
          close()
          moveToRelative(1.98F, 5.377F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.73F, -0.73F, 1.914F, -0.73F, 2.644F, 0.0F)
          curveToRelative(0.73F, 0.731F, 0.73F, 1.915F, 0.0F, 2.646F)
          lineToRelative(-4.83F, 4.829F)
          curveToRelative(-0.281F, 0.282F, -0.634F, 0.481F, -1.02F, 0.578F)
          lineToRelative(-1.498F, 0.374F)
          curveToRelative(-0.651F, 0.163F, -1.242F, -0.427F, -1.079F, -1.078F)
          lineToRelative(0.375F, -1.498F)
          curveToRelative(0.096F, -0.386F, 0.296F, -0.74F, 0.578F, -1.02F)
          close()        
      }
    }
    return _cloudEdit16!!
  }

private var _cloudEdit16: ImageVector? = null
