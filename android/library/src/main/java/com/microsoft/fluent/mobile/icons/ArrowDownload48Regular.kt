package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDownload48: ImageVector
  get() {
    if (_arrowDownload48 != null) {
      return _arrowDownload48!!
    }
    _arrowDownload48 = fluentIcon(name = "Regular.ArrowDownload48", 48f) {
      materialPath {
          moveTo(12.25F, 39.5F)
          horizontalLineToRelative(23.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          curveToRelative(0.0F, 0.647F, -0.492F, 1.18F, -1.122F, 1.243F)
          lineTo(35.75F, 42.0F)
          horizontalLineToRelative(-23.5F)
          curveTo(11.56F, 42.0F, 11.0F, 41.44F, 11.0F, 40.75F)
          curveToRelative(0.0F, -0.647F, 0.492F, -1.18F, 1.122F, -1.243F)
          lineTo(12.25F, 39.5F)
          horizontalLineToRelative(23.5F)
          close()
          moveTo(23.622F, 6.007F)
          lineTo(23.75F, 6.0F)
          curveToRelative(0.647F, 0.0F, 1.18F, 0.492F, 1.244F, 1.122F)
          lineTo(25.0F, 7.25F)
          verticalLineToRelative(24.29F)
          lineToRelative(5.647F, -5.646F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.767F, 0.0F)
          curveToRelative(0.489F, 0.488F, 0.489F, 1.28F, 0.0F, 1.768F)
          lineToRelative(-7.778F, 7.778F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.767F, 0.0F)
          lineToRelative(-7.779F, -7.778F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          curveToRelative(0.489F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          lineToRelative(5.642F, 5.642F)
          verticalLineTo(7.25F)
          curveToRelative(0.0F, -0.647F, 0.492F, -1.18F, 1.122F, -1.244F)
          lineTo(23.75F, 6.0F)
          lineToRelative(-0.128F, 0.006F)
          close()        
      }
    }
    return _arrowDownload48!!
  }

private var _arrowDownload48: ImageVector? = null
