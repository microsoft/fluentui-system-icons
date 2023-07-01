package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Flag24: ImageVector
  get() {
    if (_flag24 != null) {
      return _flag24!!
    }
    _flag24 = fluentIcon(name = "Regular.Flag24", 24f) {
      materialPath {
          moveTo(3.0F, 3.748F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(16.504F)
          curveToRelative(0.618F, 0.0F, 0.971F, 0.706F, 0.6F, 1.2F)
          lineTo(16.69F, 9.75F)
          lineToRelative(4.164F, 5.551F)
          curveToRelative(0.371F, 0.495F, 0.018F, 1.2F, -0.6F, 1.2F)
          horizontalLineTo(4.5F)
          verticalLineToRelative(4.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.693F, -0.648F, 0.743F)
          lineTo(3.75F, 22.0F)
          curveToRelative(-0.38F, 0.0F, -0.693F, -0.282F, -0.743F, -0.648F)
          lineTo(3.0F, 21.25F)
          verticalLineTo(3.748F)
          close()
          moveToRelative(15.754F, 0.75F)
          horizontalLineTo(4.5F)
          verticalLineToRelative(10.503F)
          horizontalLineToRelative(14.254F)
          lineToRelative(-3.602F, -4.802F)
          curveToRelative(-0.2F, -0.266F, -0.2F, -0.633F, 0.0F, -0.9F)
          lineToRelative(3.602F, -4.8F)
          close()        
      }
    }
    return _flag24!!
  }

private var _flag24: ImageVector? = null
