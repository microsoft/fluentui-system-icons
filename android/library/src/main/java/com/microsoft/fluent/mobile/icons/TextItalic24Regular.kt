package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextItalic24: ImageVector
  get() {
    if (_textItalic24 != null) {
      return _textItalic24!!
    }
    _textItalic24 = fluentIcon(name = "Regular.TextItalic24", 24f) {
      materialPath {
          moveTo(9.75F, 4.0F)
          horizontalLineToRelative(8.504F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.693F, -0.648F, 0.742F)
          lineTo(18.254F, 5.5F)
          horizontalLineToRelative(-3.197F)
          lineToRelative(-5.02F, 13.0F)
          horizontalLineToRelative(4.213F)
          curveToRelative(0.38F, 0.0F, 0.693F, 0.282F, 0.742F, 0.648F)
          lineTo(15.0F, 19.25F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(14.25F, 20.0F)
          horizontalLineToRelative(-9.5F)
          curveToRelative(-0.414F, 0.0F, -0.746F, -0.336F, -0.746F, -0.75F)
          curveToRelative(0.0F, -0.38F, 0.28F, -0.694F, 0.645F, -0.743F)
          lineTo(4.75F, 18.5F)
          horizontalLineToRelative(3.685F)
          lineToRelative(0.021F, -0.065F)
          lineTo(13.45F, 5.499F)
          horizontalLineToRelative(-3.7F)
          curveToRelative(-0.379F, 0.0F, -0.693F, -0.282F, -0.742F, -0.648F)
          lineTo(9.0F, 4.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(9.751F, 4.0F)
          horizontalLineToRelative(8.503F)
          close()        
      }
    }
    return _textItalic24!!
  }

private var _textItalic24: ImageVector? = null
