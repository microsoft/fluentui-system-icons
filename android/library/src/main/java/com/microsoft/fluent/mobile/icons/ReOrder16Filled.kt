package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ReOrder16: ImageVector
  get() {
    if (_reOrder16 != null) {
      return _reOrder16!!
    }
    _reOrder16 = fluentIcon(name = "Filled.ReOrder16", 16f) {
      materialPath {
          moveTo(2.75F, 9.25F)
          horizontalLineToRelative(10.5F)
          curveTo(13.664F, 9.25F, 14.0F, 9.586F, 14.0F, 10.0F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(13.25F, 10.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 10.75F, 2.0F, 10.414F, 2.0F, 10.0F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(2.75F, 9.25F)
          horizontalLineToRelative(10.5F)
          close()
          moveToRelative(0.0F, -4.0F)
          horizontalLineToRelative(10.5F)
          curveTo(13.664F, 5.25F, 14.0F, 5.586F, 14.0F, 6.0F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(13.25F, 6.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 6.75F, 2.0F, 6.414F, 2.0F, 6.0F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(2.75F, 5.25F)
          horizontalLineToRelative(10.5F)
          close()        
      }
    }
    return _reOrder16!!
  }

private var _reOrder16: ImageVector? = null
