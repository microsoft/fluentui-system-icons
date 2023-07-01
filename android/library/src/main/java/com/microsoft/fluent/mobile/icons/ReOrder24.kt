package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ReOrder24: ImageVector
  get() {
    if (_reOrder24 != null) {
      return _reOrder24!!
    }
    _reOrder24 = fluentIcon(name = "Regular.ReOrder24", 24f) {
      materialPath {
          moveTo(2.75F, 13.25F)
          horizontalLineToRelative(18.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(21.25F, 14.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 14.75F, 2.0F, 14.414F, 2.0F, 14.0F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(2.75F, 13.25F)
          horizontalLineToRelative(18.5F)
          close()
          moveToRelative(0.0F, -4.0F)
          horizontalLineToRelative(18.5F)
          curveTo(21.664F, 9.25F, 22.0F, 9.586F, 22.0F, 10.0F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(21.25F, 10.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 10.75F, 2.0F, 10.414F, 2.0F, 10.0F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(2.75F, 9.25F)
          horizontalLineToRelative(18.5F)
          close()        
      }
    }
    return _reOrder24!!
  }

private var _reOrder24: ImageVector? = null
