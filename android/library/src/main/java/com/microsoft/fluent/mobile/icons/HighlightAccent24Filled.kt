package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HighlightAccent24: ImageVector
  get() {
    if (_highlightAccent24 != null) {
      return _highlightAccent24!!
    }
    _highlightAccent24 = fluentIcon(name = "Filled.HighlightAccent24", 24f) {
      materialPath {
          moveTo(20.003F, 4.0F)
          lineTo(20.0F, 7.75F)
          lineToRelative(-0.007F, 0.102F)
          curveToRelative(-0.05F, 0.354F, -0.346F, 0.63F, -0.71F, 0.648F)
          horizontalLineTo(4.737F)
          lineTo(4.648F, 8.494F)
          curveTo(4.282F, 8.444F, 4.0F, 8.131F, 4.0F, 7.751F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(16.003F)
          close()
          moveToRelative(-4.496F, 9.5F)
          horizontalLineTo(8.5F)
          verticalLineTo(21.0F)
          lineToRelative(6.576F, -3.106F)
          curveToRelative(0.23F, -0.108F, 0.388F, -0.324F, 0.424F, -0.572F)
          lineToRelative(0.008F, -0.107F)
          lineToRelative(-0.001F, -3.715F)
          close()        
      }
    }
    return _highlightAccent24!!
  }

private var _highlightAccent24: ImageVector? = null
