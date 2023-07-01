package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentCopy24: ImageVector
  get() {
    if (_documentCopy24 != null) {
      return _documentCopy24!!
    }
    _documentCopy24 = fluentIcon(name = "Filled.DocumentCopy24", 24f) {
      materialPath {
          moveTo(13.0F, 6.75F)
          verticalLineTo(2.0F)
          horizontalLineTo(8.75F)
          curveTo(7.507F, 2.0F, 6.5F, 3.007F, 6.5F, 4.25F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(-4.75F)
          curveTo(14.007F, 9.0F, 13.0F, 7.993F, 13.0F, 6.75F)
          close()
          moveToRelative(1.5F, 0.0F)
          verticalLineTo(2.5F)
          lineToRelative(5.0F, 5.0F)
          horizontalLineToRelative(-4.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveTo(5.503F, 4.627F)
          curveTo(4.627F, 4.935F, 4.0F, 5.769F, 4.0F, 6.75F)
          verticalLineToRelative(10.504F)
          curveToRelative(0.0F, 2.623F, 2.127F, 4.75F, 4.75F, 4.75F)
          horizontalLineToRelative(6.494F)
          curveToRelative(0.98F, 0.0F, 1.813F, -0.626F, 2.122F, -1.5F)
          horizontalLineTo(8.75F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.455F, -3.25F, -3.25F)
          lineTo(5.503F, 4.627F)
          close()        
      }
    }
    return _documentCopy24!!
  }

private var _documentCopy24: ImageVector? = null
