package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Snooze16: ImageVector
  get() {
    if (_snooze16 != null) {
      return _snooze16!!
    }
    _snooze16 = fluentIcon(name = "Filled.Snooze16", 16f) {
      materialPath {
          moveTo(4.0F, 7.5F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.574F, 0.0F, 0.922F, 0.61F, 0.665F, 1.097F)
          lineTo(7.11F, 8.686F)
          lineTo(5.457F, 11.0F)
          horizontalLineToRelative(1.042F)
          curveToRelative(0.415F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(6.5F, 12.5F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.574F, 0.0F, -0.922F, -0.61F, -0.665F, -1.097F)
          lineToRelative(0.055F, -0.089F)
          lineTo(5.042F, 9.0F)
          horizontalLineTo(3.999F)
          curveTo(3.585F, 9.0F, 3.25F, 8.664F, 3.25F, 8.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.649F, -0.743F)
          lineToRelative(0.1F, -0.007F)
          horizontalLineToRelative(2.5F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(5.0F, -5.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.556F, 0.0F, 0.907F, 0.579F, 0.681F, 1.063F)
          lineToRelative(-0.049F, 0.09F)
          lineTo(10.366F, 8.0F)
          horizontalLineToRelative(2.133F)
          curveToRelative(0.415F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(12.5F, 9.5F)
          horizontalLineTo(9.0F)
          curveToRelative(-0.557F, 0.0F, -0.907F, -0.579F, -0.681F, -1.063F)
          lineToRelative(0.049F, -0.09F)
          lineTo(11.133F, 4.0F)
          horizontalLineTo(9.0F)
          curveTo(8.585F, 4.0F, 8.25F, 3.664F, 8.25F, 3.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.649F, -0.743F)
          lineToRelative(0.1F, -0.007F)
          horizontalLineToRelative(3.5F)
          horizontalLineTo(9.0F)
          close()        
      }
    }
    return _snooze16!!
  }

private var _snooze16: ImageVector? = null
