package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FontDecrease24: ImageVector
  get() {
    if (_fontDecrease24 != null) {
      return _fontDecrease24!!
    }
    _fontDecrease24 = fluentIcon(name = "Filled.FontDecrease24", 24f) {
      materialPath {
          moveTo(16.625F, 2.22F)
          curveToRelative(-0.431F, -0.346F, -1.06F, -0.276F, -1.406F, 0.155F)
          curveToRelative(-0.345F, 0.432F, -0.275F, 1.06F, 0.157F, 1.406F)
          lineToRelative(2.5F, 2.0F)
          curveToRelative(0.365F, 0.292F, 0.883F, 0.292F, 1.249F, 0.0F)
          lineToRelative(2.5F, -2.0F)
          curveToRelative(0.43F, -0.345F, 0.5F, -0.974F, 0.156F, -1.406F)
          curveToRelative(-0.345F, -0.43F, -0.974F, -0.5F, -1.406F, -0.156F)
          lineTo(18.5F, 3.72F)
          lineToRelative(-1.875F, -1.5F)
          close()
          moveTo(12.0F, 4.0F)
          curveToRelative(0.4F, 0.0F, 0.762F, 0.238F, 0.92F, 0.606F)
          lineToRelative(5.999F, 14.0F)
          curveToRelative(0.218F, 0.507F, -0.018F, 1.095F, -0.525F, 1.313F)
          curveToRelative(-0.508F, 0.217F, -1.096F, -0.018F, -1.313F, -0.525F)
          lineTo(15.198F, 15.0F)
          horizontalLineTo(8.802F)
          lineTo(6.92F, 19.394F)
          curveToRelative(-0.217F, 0.507F, -0.805F, 0.742F, -1.313F, 0.525F)
          curveTo(5.1F, 19.7F, 4.864F, 19.113F, 5.081F, 18.606F)
          lineToRelative(6.0F, -14.0F)
          curveTo(11.239F, 4.238F, 11.6F, 4.0F, 12.0F, 4.0F)
          close()
          moveToRelative(0.0F, 3.538F)
          lineTo(9.66F, 13.0F)
          horizontalLineToRelative(4.68F)
          lineTo(12.0F, 7.538F)
          close()        
      }
    }
    return _fontDecrease24!!
  }

private var _fontDecrease24: ImageVector? = null
