package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Add24: ImageVector
  get() {
    if (_add24 != null) {
      return _add24!!
    }
    _add24 = fluentIcon(name = "Regular.Add24", 24f) {
      materialPath {
          moveTo(11.75F, 3.0F)
          curveToRelative(0.38F, 0.0F, 0.693F, 0.282F, 0.743F, 0.648F)
          lineTo(12.5F, 3.75F)
          lineTo(12.501F, 11.0F)
          horizontalLineToRelative(7.253F)
          curveToRelative(0.415F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(19.754F, 12.5F)
          horizontalLineToRelative(-7.253F)
          lineToRelative(0.002F, 7.25F)
          curveToRelative(0.0F, 0.413F, -0.335F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.693F, -0.283F, -0.743F, -0.649F)
          lineToRelative(-0.007F, -0.102F)
          lineToRelative(-0.002F, -7.249F)
          horizontalLineTo(3.752F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(3.752F, 11.0F)
          horizontalLineToRelative(7.25F)
          lineTo(11.0F, 3.75F)
          curveTo(11.0F, 3.336F, 11.336F, 3.0F, 11.75F, 3.0F)
          close()        
      }
    }
    return _add24!!
  }

private var _add24: ImageVector? = null
