package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableCellEdit16: ImageVector
  get() {
    if (_tableCellEdit16 != null) {
      return _tableCellEdit16!!
    }
    _tableCellEdit16 = fluentIcon(name = "Filled.TableCellEdit16", 16f) {
      materialPath {
          moveTo(6.0F, 5.0F)
          verticalLineToRelative(4.982F)
          curveToRelative(0.084F, -0.11F, 0.175F, -0.214F, 0.274F, -0.312F)
          lineTo(10.0F, 5.944F)
          verticalLineTo(5.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(-2.5F, 6.0F)
          curveTo(2.672F, 11.0F, 2.0F, 10.328F, 2.0F, 9.5F)
          verticalLineToRelative(-3.0F)
          curveTo(2.0F, 5.672F, 2.672F, 5.0F, 3.5F, 5.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(3.5F)
          close()
          moveToRelative(3.48F, -0.623F)
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
    return _tableCellEdit16!!
  }

private var _tableCellEdit16: ImageVector? = null
