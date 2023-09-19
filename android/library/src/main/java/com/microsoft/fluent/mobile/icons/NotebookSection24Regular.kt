package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.NotebookSection24: ImageVector
  get() {
    if (_notebookSection24 != null) {
      return _notebookSection24!!
    }
    _notebookSection24 = fluentIcon(name = "Regular.NotebookSection24", 24f) {
      materialPath {
          moveTo(15.648F, 2.007F)
          lineTo(15.75F, 2.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(16.5F, 2.75F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 0.415F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(15.0F, 21.25F)
          verticalLineToRelative(-1.254F)
          horizontalLineTo(9.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(6.25F)
          curveTo(7.0F, 5.007F, 8.007F, 4.0F, 9.25F, 4.0F)
          lineTo(15.0F, 3.999F)
          verticalLineTo(2.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(15.75F, 2.0F)
          lineToRelative(-0.102F, 0.007F)
          close()
          moveTo(15.0F, 5.5F)
          horizontalLineTo(9.25F)
          curveTo(8.836F, 5.5F, 8.5F, 5.836F, 8.5F, 6.25F)
          verticalLineToRelative(11.496F)
          curveToRelative(0.0F, 0.415F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineTo(15.0F)
          verticalLineTo(5.5F)
          close()        
      }
    }
    return _notebookSection24!!
  }

private var _notebookSection24: ImageVector? = null
